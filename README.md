# kcToggle

Replace default browser checkboxes with this themable jQuery plugin.

## Install
In your html document simply add the following to your `<head>`. *kcToggle* is jQuery dependant so be sure to have a copy of jQuery 1.6+ loaded before including the plugin files in your document's `<head>`.
```
<link href="../kcToggle.css" media="all" rel="stylesheet" type="text/css" />
<script src="../kcToggle.js" type="text/javascript" ></script>
```

## Usage
*kcToggle* can be used on any checkbox. To initialize the plugin and get your checkboxes looking like the one below call the plugin like so: `$('input[kcToggle]').kcToggle();`. kcToggle will also take options. You can set the label it displays by passing the option in an Object like below.
```
var labels = {
      text: {
        off: 'No',
        on: 'Yes'
      }
    };
$('input[kcToggle]').kcToggle(labels);
```

## Example
[![kcToggle](https://raw.githubusercontent.com/kevinchappell/kcToggle/master/example/example.png)](http://kevinchappell.github.io/kcToggle/)

