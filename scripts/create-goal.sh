API="http://localhost:4741"
URL_PATH="/goals"
TOKEN="iL6+jZDiwCkWQdVdbhenNpevYq1hJTD1ruABo0djgzQ=--EE+SBJOa3E+RjENMtVC2GbbppMkcDcHygxHj/3yLyyw="
TITLE="My goal"
DESCRIPTION="My description"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "goal": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'
