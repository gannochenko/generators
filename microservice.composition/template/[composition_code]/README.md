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
  <a href="https://github.com/gannochenko/<%- composition_code %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h3 align="center"><%- composition_name %></h3>

  <p align="center">
    The project helps language teachers automate their process.
    <!--
    <br />
    <a href="https://github.com/gannochenko/<%- composition_code %>"><strong>Explore the docs »</strong></a>
    -->
    <br />
    <br />
    <a href="https://github.com/gannochenko/<%- composition_code %>/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/gannochenko/<%- composition_code %>/issues/new">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Development](#development)
  * [Prerequisites](#prerequisites)
  * [Setup](#setup)
  * [Code generation](#code-generation)
  * [Documentation](#documentation)
* [Deployment](#deployment)
  * [Prerequisites](#prerequisites)
  * [Workflow](#workflow)
  * [Demo](#demo)
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

Brief description goes here.

<!-- DEVELOPMENT -->
## Development

### Prerequisites

* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Docker](https://docs.docker.com/install/)
* [Generilla](https://github.com/gannochenko/generilla) (optionally)

### Setup

1. Clone [the repository of the project](https://github.com/gannochenko/linguacourse.git)
    ```sh
    git clone git@github.com:gannochenko/<%- composition_code %>.git
    ```

2. Install NPM packages in the root and all sub-applications (yes, this is not automated yet)
    ```sh
    cd <%- composition_code %>;
    yarn;
    ```
3. Pull infrastructure images.<br />
    If this is the first time you run the project, it is recommended to pre-pull the infrastructure images:
    ```sh
    ./script/images.pull.sh
    ```

4. Run the applications.<br />
    To run the applications on the host machine and the rest of the stuff in Docker (faster, less reliable), type
    ```sh
    ./script/start.sh
    ```
    Alternatively, to run everything inside Docker (slower, more reliable), type
    ```sh
    ./script/start.sh -d
    ```

### Code generation

In order to simplify some day-to-day coding routine, a satellite project called [Generilla](https://github.com/gannochenko/generilla) was developed. 
The project may be used to generate things like `pages` and `components`. Please, follow it`s [README](https://github.com/gannochenko/generilla) to find out more.

To create a `component` boilerplate, do the following:
```sh
cd components;
generilla run react.component;
```

Answer some questions and the component will appear in the current folder.
The same is with a `page` boilerplate:

```sh
cd pages;
generilla run microservice.frontend.page;
```

Note that you will still have to connect the newly-created reducer and saga to the redux store, as well as make an application route manually. This is not automated yet.

### Documentation

* [Project description](https://docs.google.com/document/__PUT_LINK_HERE__)
* [Primary scripts and use-cases](https://docs.google.com/document/__PUT_LINK_HERE__)
* [Features](https://docs.google.com/document/__PUT_LINK_HERE__)
* [Task management and development flow](https://trello.com/b/G0bOIQHu/<%- composition_code %>)
* [UX prototype](https://www.figma.com/__PUT_LINK_HERE__)

<!-- DEPLOYMENT -->
## Deployment

### Prerequisites

* CI/CD or local build environment
* [Node](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Docker](https://docs.docker.com/install/)
* [Terraform](https://www.terraform.io/downloads.html)
* Kubernetes cluster up and running
* Kubectl

### Workflow

Todo

### Demo

The project deployed without Docker to the static website hosting:

<!-- ROADMAP -->
## Roadmap

* Make MVP
* Find clients
* ...
* Profit!

See the [open issues](https://github.com/gannochenko/<%- composition_code %>/issues) for a list of proposed features (and known issues).

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

[Sergei Gannochenko](https://gannochenko.dev)

Project Link: [https://github.com/gannochenko/<%- composition_code %>](https://github.com/gannochenko/<%- composition_code %>)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Special thanks to:

* [Unsplash](https://unsplash.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gannochenko/<%- composition_code %>.svg?style=flat-square
[contributors-url]: https://github.com/gannochenko/<%- composition_code %>/graphs/contributors
[language-shield]: https://img.shields.io/github/languages/top/gannochenko/<%- composition_code %>.svg?style=flat-square
[language-url]: https://github.com/gannochenko/<%- composition_code %>
[forks-shield]: https://img.shields.io/github/forks/gannochenko/<%- composition_code %>.svg?style=flat-square
[forks-url]: https://github.com/gannochenko/<%- composition_code %>/network/members
[stars-shield]: https://img.shields.io/github/stars/gannochenko/<%- composition_code %>.svg?style=flat-square
[stars-url]: https://github.com/gannochenko/<%- composition_code %>/stargazers
[issues-shield]: https://img.shields.io/github/issues/gannochenko/<%- composition_code %>.svg?style=flat-square
[issues-url]: https://github.com/gannochenko/<%- composition_code %>/issues
[license-shield]: https://img.shields.io/github/license/gannochenko/<%- composition_code %>.svg?style=flat-square
[license-url]: https://github.com/gannochenko/<%- composition_code %>/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gannochenko/
[product-screenshot]: images/screenshot.png
