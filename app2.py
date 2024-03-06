# app2.py

from flask import Flask, jsonify, render_template
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB Atlas connection
client = MongoClient('mongodb+srv://sungheacho0409:fJ7QeiELtywQJrBn@cluster0.eq3tib8.mongodb.net/')
db = client['insurance_01']  
collection = db['business_sector'] 

@app.route('/data')
def get_data():
    # Define the aggregation pipeline
    pipeline = [
        {"$group": {"_id": "$div_4", "count": {"$sum": 1}, "div1": {"$addToSet": "$div_1"}, "div5": {"$addToSet": "$div_5"}}},
        {"$sort": {"count": -1}}  # Sort bars in descending order
    ]
    # Execute the aggregation pipeline
    result = list(collection.aggregate(pipeline))
    # Return the result as JSON
    return jsonify(result)

@app.route('/')
def main():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
