
class DocsIndexer < Jekyll::Generator

  def generate(site)
    version_objs = site.config['available_versions'] # from _config.yml
    version_hash = {}

    # build hash of version objects
    for version_obj in version_objs
      version_hash[version_obj['id']] = version_obj
    end

    for version_obj in version_objs
      if version_obj['collection']

        # build docs array/hash
        docs = site.collections[version_obj['collection']].docs
        doc_hash = hash_docs_by_slug(docs)
        version_obj['docs'] = docs
        version_obj['doc_hash'] = doc_hash

        # figure out the top-level url by finding the index page
        version_obj['url'] = compute_version_index_url(docs)

        # connect categories to articles and vice-versa
        process_categories(docs, doc_hash)
      end
    end

    for version_obj in version_objs
      if version_obj['docs']
        for doc in version_obj['docs']

          # compute version info for each document
          doc.data['version'] = version_obj
          doc.data['all_versions'] = compute_all_versions(doc, version_objs, version_hash)

          # make articles aware of demo documents
          compute_demo_documents(doc, version_obj['doc_hash'])

          # assign a layout if not explicitly defined
          if not doc.data['layout']
            doc.data['layout'] =
              if doc.data['children'] or doc.data['demos']
                'docs-sublanding'
              else
                'docs-article'
              end
          end

          doc.data['is_docs'] = true
        end
      end
    end
  end

end


def hash_docs_by_slug(docs)
  hash = {}

  for doc in docs
    hash[doc.data['slug']] = doc
  end

  hash
end


def compute_version_index_url(docs)
  for doc in docs
    if doc.data['slug'] == 'index'
      return normalize_url(doc.url)
    end
  end
end


def process_categories(docs, doc_hash)
  for category_doc in docs
    if category_doc.data['children'] or category_doc.data['related'] # a category?

      own_child_groups = build_category_child_groups(
        (category_doc.data['children'] or []),
        doc_hash
      )

      related_docs = build_category_related_docs(
        (category_doc.data['related'] or []),
        doc_hash
      )

      all_children_groups = own_child_groups +
        if related_docs.length > 0
          [ { 'is_related' => true, 'children' => related_docs } ]
        else
          []
        end

      # help liquid template with falsiness
      category_doc.data['own_child_groups'] = if own_child_groups.length > 0 then own_child_groups else nil end
      category_doc.data['child_groups'] = if all_children_groups.length > 0 then all_children_groups else nil end

      if category_doc.data['slug'] != 'index'
        # for the main index, AVOID assigning the top-level "category"
        # to the sublanding pages
        assign_category_to_articles(category_doc, own_child_groups)
      end
    end
  end
end


# assembles a tree structure of child articles for the front-matter of an article.
# returned data structure is array of groups, each group having an array of articles.
def build_category_child_groups(raw_children, doc_hash)
  top_level_docs = []
  other_groups = []
  groups = []

  processed_children = process_raw_children(raw_children, doc_hash)

  for processed_child in processed_children
    if processed_child['children']
      other_groups.push(processed_child)
    else
      top_level_docs.push(processed_child)
    end
  end

  if top_level_docs.length > 0
    groups.push({ 'children' => top_level_docs })
  end

  groups += other_groups
  groups
end


def process_raw_children(raw_children, doc_hash)
  processed_children = []

  for node in raw_children
    full_node = nil

    if (node.instance_of?(String))
      full_node = { 'article' => node }
    else
      full_node = node
    end

    if full_node['article']
      if doc_hash[full_node['article']]
        full_node['article'] = doc_hash[full_node['article']]
      else
        print "Could not find doc %s\n" % full_node['article']
      end
    end

    full_node['children'] =
      if full_node['children'] and full_node['children'].length
        process_raw_children(full_node['children'], doc_hash)
      else
        nil
      end

    processed_children.push(full_node)
  end

  processed_children
end


def build_category_related_docs(raw_related, doc_hash)
  related_docs = []

  for node in raw_related
    if node.instance_of?(String)
      if doc_hash[node]
        related_docs.push({
          'article' => doc_hash[node]
        })
      else
        print "Could not find doc %s\n" % node
      end
    end
  end

  related_docs
end


def assign_category_to_articles(category_doc, child_groups)
  for child_group in child_groups
    if not child_group['is_related'] # only for real children
      for node in child_group['children']
        article = node['article']
        article.data['category'] = category_doc

        if category_doc.data['is_premium']
          article.data['is_premium'] = true
        end
      end
    end
  end
end


def compute_all_versions(doc, version_objs, version_hash)
  doc.data['all_versions'] = version_objs.map do |version_obj|

    if version_obj['aliased_to']
      content_doc = version_hash[version_obj['aliased_to']]['doc_hash'][doc.data['slug']]
      {
        'id' => version_obj['id'],
        'is_latest' => version_obj['is_latest'],
        'is_selected' => false,
        'url' =>
          if content_doc
            normalize_url(content_doc.url) + '#' + version_obj['id']
          end
      }
    else
      content_doc = version_obj['doc_hash'][doc.data['slug']]
      {
        'id' => version_obj['id'],
        'is_latest' => version_obj['is_latest'],
        'is_selected' => version_obj['id'] == doc.data['version']['id'],
        'url' =>
          if content_doc
            normalize_url(content_doc.url)
          end
      }
    end
  end
end


def compute_demo_documents(doc, doc_hash)
  if doc.data['demos']
    demo_documents = []

    for slug in doc.data['demos']
      if doc_hash[slug]
        demo_documents.push(doc_hash[slug])
      else
        print "Could not find doc %s\n" % slug
      end
    end

    doc.data['demo_documents'] = demo_documents
  end
end


def normalize_url(url)
  return url.sub(/\/$/, '') # strip trailing slash (b/c of index url workaround)
end
