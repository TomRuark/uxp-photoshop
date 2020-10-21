(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{IwO8:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var o=t("wx14"),i=t("zLVn"),a=(t("q1tI"),t("7ljp")),s=t("LHWr"),l=(t("qKvR"),{}),r=s.a;function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.mdx)(r,Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"icons-for-your-plugins"},"Icons for Your Plugins"),Object(a.mdx)("p",null,"The manifest.json file supports an optional ",Object(a.mdx)("inlineCode",{parentName:"p"},"icons")," node. Children of this node describe one or more icons used in your plugin's UI. The icons only apply to panel plugins, not modal dialogs nor faceless plugins. They are shown when a plugin's panel is collapsed."),Object(a.mdx)("p",null,"There can be separate icons for dark and light Photoshop UI themes, and separate icons for various resolutions:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"1x = 32x32 pixels"),Object(a.mdx)("li",{parentName:"ul"},"1.25x = 40x40 pixels"),Object(a.mdx)("li",{parentName:"ul"},"1.5x = 48x48 pixels"),Object(a.mdx)("li",{parentName:"ul"},"2x = 64x64 pixels")),Object(a.mdx)("h2",{id:"quick-start"},"Quick Start"),Object(a.mdx)("p",null,"To use icons in your plugin, follow these steps:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},Object(a.mdx)("p",{parentName:"li"},"Design your icons with a border; for example for a 32x32 1x icon, design it at 23x23 and leave your icon a little border -- this will ensure best rendering. You can use larger sizes, but the results may be blurrier. Leave similar margins for the other sizes.")),Object(a.mdx)("li",{parentName:"ol"},Object(a.mdx)("p",{parentName:"li"},'Export your icons with @1x and @2x scales. If you want, you can also export for 1.5 and 1.25x sizes as well. So, if your icon is named "pluginIcon", the files should be:'))),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),'pluginIcon@1x.png [note the "@1x" suffix]\npluginIcon@1.25x.png\npluginIcon@1.5x.png\npluginIcon@2x.png\n')),Object(a.mdx)("ol",{start:3},Object(a.mdx)("li",{parentName:"ol"},Object(a.mdx)("p",{parentName:"li"},"In your manifest, use the following form (note that we're assuming you exported the icons above into your plugin's \"icons\" folder -- not absolutely necessary, but a good organizing practice):"),Object(a.mdx)("pre",{parentName:"li"},Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),'"icons": [\n   {\n     "width": 23,\n     "height": 23,\n     "path": "icons/pluginIcon.png",\n     "scale": [1, 1.25, 1.5, 2],\n     "theme": ["darkest", "dark", "light", "lightest", "all"]\n   }\n ]\n')))),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),"\nNote that the width and height determines the size of the icon in Ps right now, and not the size of your icon's actual resolution. Using anything other than 23x23 is probably going to render poorly.\n\nWith this, your plugin's icon should be visible inside Photoshop (but not in the Plugin Panel; this latter limitation is by design).\n\n## Supporting Themes\n\nPhotoshop supports multiple themes, and you may choose to create an icon that uses these themes. All the updated samples have theme-appropriate icons.\n\nUsing themes is just like supporting a single icon, but now you have two entries inside icons and another set of icon files.\n\nFor example:\n\n")),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),'"icons": [\n    {\n        "width": 23, "height": 23, "path": "icons/dark.png", "scale": [ 1, 2 ],\n        "theme": [ "darkest", "dark ]\n    }, {\n        "width": 23, "height": 23, "path": "icons/light.png", "scale": [ 1, 2 ],\n        "theme": [ "lightest", "light" ]\n    }\n]\n')),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),'\nHere the "dark.png" icons will be used when Photoshop is using the dark themes, and "light.png" will be used when Photoshop uses the light themes.\n\nYou should seriously supporting themes with your icons, as not doing so may result in poor contrast when using certain themes.\n\n## Supporting multiple panels\n\nPlugins can have more than one panel, and each panel can have its own icon. To support this, you can override the top-level icons entry by adding another entry into your plugin\'s entrypoint. For example:\n\n')),Object(a.mdx)("p",null,'  "entrypoints": [\n{\n"type": "panel",\n"id": "runPanel",\n"icons": [\n{\n"width": 23, "height": 23, "path": "icons/run-dark.png", "scale": ',"[ 1, 2 ]",',\n"theme": ','[ "darkest", "dark" ]','\n}, {\n"width": 23, "height": 23, "path": "icons/run-light.png", "scale": ',"[ 1, 2 ]",',\n"theme": ','[ "lightest", "light" ]','\n}\n]\n}\n],\n"icons": [\n{\n"width": 23, "height": 23, "path": "icons/plugin-dark.png", "scale": ',"[ 1, 2 ]",',\n"theme": ','[ "darkest", "dark" ]','\n}, {\n"width": 23, "height": 23, "path": "icons/plugin-light.png", "scale": ',"[ 1, 2 ]",',\n"theme": ','[ "lightest", "light" ]',"\n}\n]"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(o.a)({parentName:"pre"},{}),"\nIn the above example, the runPanel panel will show a separate icon.\n\n> You should supply a separate icon for each panel you support. If you don't, the user may not be able to immediately determine which panel they're trying to open.\n\nexport const _frontmatter = {}\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-plugin-icons-md-6aa0bc3455cfa853417a.js.map