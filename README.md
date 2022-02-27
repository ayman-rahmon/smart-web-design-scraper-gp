# Smart Web Design Scraper (Graduation Project)

The archived repo of "Smart Web Design Scraper" graduation project.


Web Design Scraper is a tool to extract objective web design measurements from a web page. This repo contains the early implementation of the web design scraping concept that we coined in [our research paper](https://ieeexplore.ieee.org/abstract/document/9271770).


![screenshots](images/screenshots.jpg)


Note : this project was created while Node 14 was the latest version of node so it will work with no problems on that version and the project is not tested on newer versions of NodeJS.

## Project Goals

The extracted web design measurements from this tool can be used for:
- Auditing web designs through objective measurements
- Understanding and comparing web design patterns between different websites

The JSON output can also be used as machine learning inputs for:
- Predicting the usability of websites
- Classifying website based on certain design measurements
- Scoring website quality and design aesthetic

## Extracted Design Information

Currently this tool can extract the following design information:
- Symmetry
- Complexity
- Density
- Cohesion
- Economy
- Simplicty
- Font size families
- Text size distribution
- Color count rank
- Vibrant colors

There are [more measurements](./web-design-factors.md) planned to be included in this tool.


## Technologies

This project uses the following libraries

- Docker
- Angular
- Express
- OpenCV
- Java Spring
- Apollo GraphQL

## Preparation

These steps are required before development or production compilation.

```sh
# Install node modules
(cd shared && npm install)
(cd client && npm install)
(cd server && npm install)
(cd chrome-ext && npm install)
```

## Running development mode

### Terminal 1: Mongo & Spring
```
docker-compose -f dev.docker-compose.yml up --build
```

### Terminal 2: Express
```
cd server
npm start
```

### Terminal 3: Angular
```
cd client
npm start
```

### Terminal 4: Chrome Extension
```
cd chrome-ext
npm run watch
```

## Running the app

```sh
# Compile codes
(cd client && npm run build)
(cd server && npm run build)
(cd chrome-ext && npm run build)

# Run docker
docker-compose up
```


## Future Development

- [ ] Implement user configuration
- [ ] Implement [more measurements](./web-design-factors.md)
- [ ] Allow users to analyze displayed viewport only
- [ ] Compile for Puppeteer to allow analyzing webpages through CLI
- [ ] Use WebWorker to optimize performance

## Research Paper

- A. Namoun, A. Alshanqiti, E. Chamudi and M. A. Rahmon, "Web Design Scraping: Enabling Factors, Opportunities and Research Directions," 2020 12th International Conference on Information Technology and Electrical Engineering (ICITEE), Yogyakarta, 2020, pp. 104-109, doi: [10.1109/ICITEE49829.2020.9271770.](https://ieeexplore.ieee.org/abstract/document/9271770)


## Authors
- Ezzat Chamudi
- Mohammed Ayman Rahmon
