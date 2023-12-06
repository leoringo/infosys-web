import { FETCH_TEAMS } from "../actions/actionType"

const initialState = {
    teams: [
        {
            name: "Sarah Gilbert",
            title: "CEO & Founder DigiXine"
        },
        {
            name: "Stephen Joe",
            title: "Social Media Manager"
        },
        {
            name: "Amanda Johnson",
            title: "Senior Content Writer"
        },
        {
            name: "Danie Rouge",
            title: "Senior UX Writer"
        },
        {
            name: "Joana Marie",
            title: "Frontend Engineer"
        },
        {
            name: "Larry Sam",
            title: "Backend Engineer"
        },
        {
            name: "Jessica Law",
            title: "Ads & Promotion Expert"
        },
        {
            name: "Risa Watson",
            title: "Senior SEO Specialist"
        }
    ]
}

export default function teamReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TEAMS:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}