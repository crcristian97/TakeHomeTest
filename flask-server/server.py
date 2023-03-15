import requests
from flask import Flask

app = Flask(__name__)

#On line 12, you can change the 'owner' field to the profile you want, and the 'repo' field to the repository you need to see the commits
# when you open the link add /members in the url
# Members API ROUTE
@app.route("/members")
def members():
    url = "https://api.github.com/repos/{owner}/{repo}/commits"
    response = requests.get(url.format(owner="crcristian97", repo="chatbot"))
    if response.status_code == 200:
        data = response.json()
        return {"commits": data}
    else:
        return {"error": "Failed to retrieve commit history"}


if __name__ == "__main__":
    app.run(debug=True)
