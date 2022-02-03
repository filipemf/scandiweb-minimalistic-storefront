import {gql} from '@apollo/client'

//Search Queries


//Search for All products
export const LOAD_ALL = gql`
    query TestQuery{
        category (input: {title: "all"}) {
            name
        products {
            id
            name
            gallery
            attributes{
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
            prices {
            currency{
                label
                symbol
            }
            amount
            }
        }
        }
    }
`

//Search for Tech products
export const LOAD_TECH = gql`
    query TestQuery{
        category (input: {title: "tech"}) {
            name
        products {
            id
            name
            gallery
            attributes{
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
            prices {
            currency{
                label
                symbol
            }
            amount
            }
        }
        }
    }
`

//Search for Clothes products
export const LOAD_CLOTHES = gql`
    query TestQuery{
        category (input: {title: "clothes"}) {
            name
        products {
            id
            name
            gallery
            attributes{
                id
                name
                type
                items{
                  displayValue
                  value
                  id
                }
              }
            prices {
            currency{
                label
                symbol
            }
            amount
            }
        }
        }
    }
`

//Search for available currencies
export const LOAD_CURRENCIES = gql`
    query TestQuery{
        currencies {
            label
            symbol
        }
        
    }
`
