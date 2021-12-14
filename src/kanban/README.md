### Kanban (Webpack)

## Technologies used in the project:
## Loaders:
babel-loader - js file loader
css-loader - css file loader
html-loader - loader for html files
style-loader - style file loader

## Plugins:
html-webpack-plugin - Generates html file in build folder
mini-css-extract-plugin - Extracts css files to destination folder
copy-webpack-plugin - Copies individual files or entire directories, which already exist, to the build directory
## Collector settings options:
entry - entry point
output - this option sets the name of the final bundle file and the name of the build folder


## Commands
npm run build # build the project

# Structure
dist /                              # build folder
src /                               # sources
    assets /                        # images
    common /                        # common styles
        common.css
    footer /                        # block footer
        footer.css                  # styles for footer
    header /                        # header block
        header.css                  # styles for header
        createProfileDropDown.js    # create a dropdown for profile
    main /                          # block main
        createStartBlockList.js     # initialize initial tasks
        createNewList.js            # general functions for creating a task
        main.css                    # styles for main
        createTask.css              # styles for tasks
    style.css                       # main css file
    index.html                      # main page
    index.js                        # main js file