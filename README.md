The BRST is a web based utility that requests information about your environment and generates a secure Cisco router configuration based on your input.

To get started, check out <https://borderroutersec.org>!

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

Three quick start options are available:

- [Use the hosted version] (https://www.borderroutersec.org). 
- [Download the latest release](https://github.com/TedLeRoy/BRST/archive/master.zip).
- Clone the repo: `git clone https://github.com/TedLeRoy/BRST.git`.

The content of the BRST folder should be copied into your web server's site directory, likely /var/www/html.

Read the [Start Here page](https://www.borderroutersec.org//index.html) for information on how to use the BRST to generate a secure configuration file.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
brst/
├── .htaccess
├── about.html
├── advanced.html
├── BRST-favicon-16x16.ico
├── contact.html
├── copying.html
├── crypto-key-generation.html
├── download.html
├── faq.html
├── favicon.ico
├── index.html
├── normal.html
├── README.md
├── services-and-protocols.html
├── template.html
├── troubleshooting.html
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min2.css
│   ├── bootstrap2.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   ├── bootswatch.min.css
│   ├── index.html
├── fonts/
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   ├── glyphicons-halflings-regular.woff
│   ├── glyphicons-halflings-regular.woff2
│   ├── index.html
├── img/
│   ├── brst-brand.png
│   ├── BRST-favicon-32x32.png
│   ├── brst-logo.png
│   ├── brst-logo-big.png
│   ├── index.html
├── js/
│   ├── bootstrap.js
│   ├── bootstrap.min.js
│   ├── bootswatch.js
│   ├── brst.js
│   ├── index.html
│   ├── jquery-1.102.min.js
│   ├── npm.js

```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`bootstrap.*.map`) are available for use with certain browsers' developer tools.

## Bugs and feature requests

Have a bug or a feature request? Please first search [issues](https://github.com/TedLeRoy/BRST/issues) for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/TedLeRoy/BRST/issues).


## Documentation

The BRST's documentation is integrated into the site via the Help pages and links to them throughout the web pages.


## Contributing

Participation in the project is welcome. The following areas help make the project more useful to everyone:

- Reporting issues (See Bugs and feature requests above).
- Requesting features (See Bugs and feature requests above).
- Implementing changes
    - Create a clone of the main branch
	- Add your changes and test
	- Create a [pull request] (https://github.com/TedLeRoy/BRST/pulls)
	

## Community

Keep track of development and community news.

- Follow [@BorderRouterSec on Twitter](https://twitter.com/borderroutersec).
- Read and subscribe to [The Official BRST Wiki](https://github.com/TedLeRoy/BRST/wiki/About-the-BRST-Project).


## Versioning

Not fully implemented yet, but will likely be maintained under [the Semantic Versioning guidelines](http://semver.org/).



## Creator

**Ted LeRoy**

- <https://twitter.com/Ted_LeRoy>
- <https://github.com/TedLeRoy>

## Contributors

**Abhi Balakrisnan**

- <https://twitter.com/abhi_m_>
- <https://github.com/Abhi-M/>

**Vernon Villanueva**

- <https://twitter.com/vernon_v>


## Copyright and license

Code and documentation copyright 2007-2015 Ted LeRoy. Code released [GNU Affero General Public License] (http://www.gnu.org/licenses/agpl-3.0.html). Docs are integrated and are covered under the same license.
