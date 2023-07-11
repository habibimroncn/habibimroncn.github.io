---
layout: full
title: Lists of Snippets
permalink: /snippets/
seo_description: 'Lists of Snippets'
main_class: lists_of_snippet
---

<div class="heading_center">
  <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Snippets <i class="fa fa-long-arrow-left" aria-hidden="true"></i></h2>
</div>

{% assign snippet_data = site.snippets | sort:'title' %}
{% for snippet in snippet_data %}
  <p>
    <a href="{{ snippet.url }}"><i class="fa fa-terminal" aria-hidden="true"></i> {{ snippet.title }}</a>
  </p>
{% endfor %}