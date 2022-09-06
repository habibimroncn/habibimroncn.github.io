---
layout: full
title: Lists of Snippets
permalink: /snippets/
seo_description: 'Lists of Snippets'
main_class: lists_of_snippet
---

Below is a list of snippets :

{% for snippet in site.snippets %}
  <p>
    <a href="{{ snippet.url }}"><i class="fa fa-terminal" aria-hidden="true"></i> {{ snippet.title }}</a>
  </p>
{% endfor %}