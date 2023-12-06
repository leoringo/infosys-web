import { FETCH_TEAMS } from "../actions/actionType"
import Person1 from "../../assets/teams/Person1.jpg"
import Person2 from "../../assets/teams/Person2.jpg"
import Person3 from "../../assets/teams/Person3.jpg"
import Person4 from "../../assets/teams/Person4.jpg"
import Person5 from "../../assets/teams/Person5.jpg"
import Person6 from "../../assets/teams/Person6.jpg"
import Person7 from "../../assets/teams/Person7.jpg"
import Person8 from "../../assets/teams/Person8.jpg"

const initialState = {
    teams: [
        {
            name: "Sarah Gilbert",
            title: "CEO & Founder DigiXine",
            img: Person1
        },
        {
            name: "Stephen Joe",
            title: "Social Media Manager",
            img: Person2
        },
        {
            name: "Amanda Johnson",
            title: "Senior Content Writer",
            img: Person3
        },
        {
            name: "Danie Rouge",
            title: "Senior UX Writer",
            img: Person4
        },
        {
            name: "Joana Marie",
            title: "Frontend Engineer",
            img: Person5
        },
        {
            name: "Larry Sam",
            title: "Backend Engineer",
            img: Person6
        },
        {
            name: "Jessica Law",
            title: "Ads & Promotion Expert",
            img: Person7
        },
        {
            name: "Risa Watson",
            title: "Senior SEO Specialist",
            img: Person8
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