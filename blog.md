---
layout: full
title: Blog
permalink: /blog/
seo_description: 'Blog'
main_class: lists_of_blog
---

<div class="heading_center">
  <h2><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Blog <i class="fa fa-long-arrow-left" aria-hidden="true"></i></h2>
</div>

{% assign blog_data = site.blogs | sort:'title' %}
{% for blog in blog_data %}
  <div class="snippet_lists_container on_blog">
    <div class="snippet_lists_icon">{{ forloop.index }}.</div>
    <div class="snippet_lists_content"><a href="{{ blog.url }}">{{ blog.title }}</a></div>
  </div>
{% endfor %}