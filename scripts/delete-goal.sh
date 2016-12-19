API="http://localhost:4741"
URL_PATH="/goals"
TOKEN="iL6+jZDiwCkWQdVdbhenNpevYq1hJTD1ruABo0djgzQ=--EE+SBJOa3E+RjENMtVC2GbbppMkcDcHygxHj/3yLyyw="
ID="585301bea1e1559e3049b426"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
