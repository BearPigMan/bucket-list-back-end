API="http://localhost:4741"
URL_PATH="/goals"
TITLE="My goal"
DESCRIPTION="My description"
ID="585301bea1e1559e3049b426"

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
