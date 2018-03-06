# MightyText for Franz

This is a [Franz](https://meetfranz.com/) recipe for [MightyText](https://mightytext.net/), an Android SMS app which allows you to text from your computer and other devices. 

For the time being there seems to be a backlog on plugin acceptance into the official Franz repository, so you must install this binary as a dev plugin. It is production ready and I use it daily. For that reason, I will update it if anything breaks.

If you would like to track the issue for inclusion into the central repository, [you may do so here](https://github.com/meetfranz/plugins/issues/50).

## Installation

1. Download the [release binary](https://github.com/brianjohnhanna/mightytext-franz-recipe/archive/master.zip).
2. Open the Franz Plugins folder on your machine (note that this `dev` directory may not exist yet, and you may need to create it):
    * Mac: `~/Library/Application Support/Franz/recipes/dev/`
    * Windows: `%appdata%/Franz/recipes/dev/`
    * Linux: `~/.config/Franz/recipes/dev`
3. Copy the `mightytext-franz-recipe-master` folder into the plugins directory (you may rename the directory if you wish)
4. Reload Franz (under the "View" menu)
5. If you still don't see the service, check the Services menu (under the cog wheel) to ensure "Enable Service" is turned on.
