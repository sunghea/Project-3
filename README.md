# Project3_Final

# Insurance Web Scraping and Data Visualization

This project utilizes web scraping techniques to extract insurance-related data from Google search results and visualizes the business sector information using a bar chart.

## Requirements

- Python, Splinter, BeautifulSoup, Flask, MongoDB, Plotly

## Overview

This project involves the following steps:

1. Web scraping insurance-related data from Google search results using Splinter and BeautifulSoup.
2. Storing the extracted data in a MongoDB database.
3. Setting up a Flask web application to serve the data.
4. Visualizing the business sector information using Plotly bar charts.

## Implementation Details

### Web Scraping

The web scraping script uses Splinter and BeautifulSoup to navigate to Google search results for insurance-related services in Toronto. It extracts relevant information such as company names, addresses, contact numbers, and websites.

### MongoDB Integration

The extracted data is stored in a MongoDB database named `insurance_01`. Two collections are used: `business_sector` for storing business sector information and `address` for storing address details.

### Flask Web Application

A Flask web application is created to serve the data stored in the MongoDB collections. Two routes are defined: `/data` to fetch business sector data and `/` to render the main HTML page.

### Data Visualization

The main HTML page contains a bar chart generated using Plotly, which visualizes the business sector information. When a bar representing a sector is clicked, additional information such as company names and contact numbers are displayed in a separate section.

## Usage

1. Install the required Python libraries listed in the requirements.
2. Set up a MongoDB instance and ensure it is running.
3. Run the web scraping script to extract data and store it in the MongoDB database.
4. Start the Flask web application.
5. Access the web application in a browser to view the data visualization.

## Repository Structure

- `ETL_3.ipynb`: Jupyter Notebook files containing code and explanations for the Extract, Transform, and Load (ETL) process for insurance office data extraction from the web.
- `app2.py`: Flask web application script.
- `index.html`: Main HTML template for rendering the web page.

## Presentation
I used web data to build an app focusing on the business section of Google search results for insurance. Firstly, I extracted initial data using BeautifulSoup and converted it into JSON format. Then, after filtering out the necessary data, I stored it in a MongoDB database. Essentially, the process involved extracting data from the web, filtering it, and saving it in a database for further use
![image](https://github.com/sunghea/Project3_Final/assets/143130002/2651d903-aca7-4797-8ad8-78f14ca68c41)

I uploaded the database to MongoDB Atlas and utilized it to develop the app
![image](https://github.com/sunghea/Project3_Final/assets/143130002/82ce92bd-8022-4b80-aabb-9967efd38f2e)

![image](https://github.com/sunghea/Project3_Final/assets/143130002/b3d20800-65e1-4b59-bd6e-ade03bc5e1d3)

![image](https://github.com/sunghea/Project3_Final/assets/143130002/45b6eef8-eb2f-408f-9dce-da30015364d9)


