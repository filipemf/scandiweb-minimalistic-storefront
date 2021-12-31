import {gql} from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query ProductQuery{
        product (id: "ps-5"){
            id
            name
        }
    }
`

export const LOAD_ALL = gql`
    query TestQuery{
        category (input: {title: "all"}) {
            name
        products {
            id
            name
            gallery
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

export const LOAD_TECH = gql`
    query TestQuery{
        category (input: {title: "tech"}) {
            name
        products {
            id
            name
            gallery
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

export const LOAD_CLOTHES = gql`
    query TestQuery{
        category (input: {title: "clothes"}) {
            name
        products {
            id
            name
            gallery
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
