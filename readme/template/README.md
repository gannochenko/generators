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

<% if (is_netlify) { %>
[![Netlify Status](https://api.netlify.com/api/v1/badges/ca134944-33b3-41ac-8d12-048fc8c20637/deploy-status)](https://app.netlify.com/sites/<%- repository_name %>/deploys)
<% } %>
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--
  <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h3 align="center"><%- project_name %></h3>

  <p align="center">
    Here goes the brief summary.
    <!--
    <br />
    <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>"><strong>Explore the docs »</strong></a>
    -->
    <br />
    <br />
    <a href="https://<%- repository_name %>.netlify.com/">View Demo</a>
    ·
    <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>/issues">Report Bug</a>
    ·
    <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

<!--
[![Preview Screen Shot][product-screenshot]](https://example.com)
-->

Here goes the description of this lovely NPM module.

### Built With

* [TypeScript](http://www.typescriptlang.org/) - everything (well, almost everything) is type-safe

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* yarn

### Installation

1. Clone the repo
```sh
git clone https://github.com/<%- github_account_name %>/<%- repository_name %>.git
```
2. Install NPM packages
```sh
cd <%- repository_name %>;
yarn;
```
3. Run the application
```sh
yarn start;
```

<!-- ROADMAP -->
## Roadmap

* soon this feature will be done
* and this
* and this too

See the [open issues](https://github.com/<%- github_account_name %>/<%- repository_name %>/issues) for a list of proposed features (and known issues).

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

<%- author_name %> - [Linkedin](https://www.linkedin.com/in/<%- author_linkedin_profile %>/)

Project Link: [https://github.com/<%- github_account_name %>/<%- repository_name %>](https://github.com/<%- github_account_name %>/<%- repository_name %>)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Special thanks to:

* [Unsplash](https://unsplash.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[contributors-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>/graphs/contributors
[language-shield]: https://img.shields.io/github/languages/top/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[language-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>
[forks-shield]: https://img.shields.io/github/forks/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[forks-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>/network/members
[stars-shield]: https://img.shields.io/github/stars/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[stars-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>/stargazers
[issues-shield]: https://img.shields.io/github/issues/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[issues-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>/issues
[license-shield]: https://img.shields.io/github/license/<%- github_account_name %>/<%- repository_name %>.svg?style=flat-square
[license-url]: https://github.com/<%- github_account_name %>/<%- repository_name %>/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sergey-gannochenko/
[product-screenshot]: images/screenshot.png
