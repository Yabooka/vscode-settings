{
  "Create and export default function": {
    "prefix": "cf",
    "body": [
      "export default function $1($2) {",
      "  return (",
      "<h1>$3</h1>",
      ")",
      "}"
    ]
  },
  "Create state hook": {
    "prefix": "useState",
    "body": ["const [$1, set$2] = useState($3)"]
  },
  "Create effect hook": {
    "prefix": "useEffect",
    "body": ["useEffect(() => {", "  $2", "}, [$3])"]
  }
}
