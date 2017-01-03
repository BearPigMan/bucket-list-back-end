API="http://localhost:4741"
URL_PATH="/goals"
TITLE=""
DESCRIPTION="My description"
ID="5852f64fa1e1559e3049b41d"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "goal": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'
