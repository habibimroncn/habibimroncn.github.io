---
layout: snippet
title: Backup WordPress using WP-CLI
permalink: /snippet/backup-wordpress-using-wp-cli
seo_description: Backup WordPress using WP-CLI
main_class: snippet
date: 2023-07-07T02:32:36.537Z
---
```
wp db export
```

```
zip -r my_export_file_name.zip *
```

```
rm (name of sql file you exported)
```