<!-- PROJECT SHIELDS -->
<!--
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Language][language-shield]][language-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--
  <a href="https://github.com/<%- github_author_code %>/<%- package_name %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h3 align="center">😱 + 😰 + 😅 = 😎</h3>
  <h3 align="center"><%- application_name %></h3>

  <p align="center">
    In two-three words write here what this package does
    <!--
    <br />
    <a href="https://github.com/<%- github_author_code %>/<%- package_name %>"><strong>Explore the docs »</strong></a>
    -->
    <br />
    <br />
    <!--
    <a href="https://<%- github_author_code %>.github.io/<%- package_name %>">View Demo</a>
    ·
    -->
    <a href="https://github.com/<%- github_author_code %>/<%- package_name %>/issues">Report Bug</a>
    ·
    <a href="https://github.com/<%- github_author_code %>/<%- package_name %>/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
<% if(is_cli) { %>
  * [Installation](#installation)
<% } %>
* [Usage](#usage)
* [Development](#development)
  * [Development prerequisites](#development-prerequisites)
  * [Development Installation](#development-installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Built With](#built-with)



<!-- ABOUT THE PROJECT -->
## About The Project

<!--
[![Preview Screen Shot][product-screenshot]](https://example.com)
-->

In more than three words tell what this package does and how it works.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

<% if(is_cli) { %>
### Installation

To install the tool globally:

~~~bash
yarn add <%- package_name_full %> -g;
~~~

Or, if you want you use it only for the current user:

~~~bash
mkdir ~/.node;
yarn global add <%- package_name_full %> --prefix ~/.node;
echo "\nexport PATH=${PATH}:${HOME}/.node/bin\n" >> ~/.bash_profile;
source ~/.bash_profile;
~~~
<% } %>

<!-- USAGE -->
## Usage

<% if(is_cli) { %>
Just go to the repository you want to have a new version for, and type there:

~~~bash
<%- command_name %> -h;
~~~
<% } %>

<!-- DEVELOPMENT -->
## Development

### Development prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Development installation

1. Clone the repo
```sh
git clone https://github.com/<%- github_author_code %>/<%- package_name %>.git
```
2. Install NPM packages
```sh
cd <%- package_name %>;
yarn;
```
3. Run the application
```sh
yarn start;
```

#### Installing a development binary system-wide

Build for the first time and then run consequent on-change builds:

~~~bash
yarn build;
yarn build:watch;
~~~

In another terminal:

~~~bash
cd $(yarn global bin)
ln -s PATH_2_YOUR_PROJECT/build.cjs/index.js ./BINARY_NAME
~~~

Now the binary is available globally!

<!-- ROADMAP -->
## Roadmap

* bugfixing :)

See the [open issues](https://github.com/<%- github_author_code %>/<%- package_name %>/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

<%- author_full_name %> - [Linkedin](https://www.linkedin.com/in/<%- linkedin_author_code %>/)

Project Link: [https://github.com/<%- github_author_code %>/<%- package_name %>](https://github.com/<%- github_author_code %>/<%- package_name %>)

<!-- BUILT WITH -->
### Built With

* [TypeScript](http://www.typescriptlang.org/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[contributors-url]: https://github.com/<%- github_author_code %>/<%- package_name %>/graphs/contributors
[language-shield]: https://img.shields.io/github/languages/top/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[language-url]: https://github.com/<%- github_author_code %>/<%- package_name %>
[forks-shield]: https://img.shields.io/github/forks/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[forks-url]: https://github.com/<%- github_author_code %>/<%- package_name %>/network/members
[stars-shield]: https://img.shields.io/github/stars/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[stars-url]: https://github.com/<%- github_author_code %>/<%- package_name %>/stargazers
[issues-shield]: https://img.shields.io/github/issues/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[issues-url]: https://github.com/<%- github_author_code %>/<%- package_name %>/issues
[license-shield]: https://img.shields.io/github/license/<%- github_author_code %>/<%- package_name %>.svg?style=flat-square
[license-url]: https://github.com/<%- github_author_code %>/<%- package_name %>/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sergey-<%- github_author_code %>/
[product-screenshot]: images/screenshot.png
