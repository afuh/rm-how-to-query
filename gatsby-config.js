module.exports = {
  siteMetadata: {
    title: 'How to query the Rick and Morty API'
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RmApi",
        fieldName: "rmApi",
        url: "https://rickandmortyapi.com/graphql"
      }
    }
  ]
}
