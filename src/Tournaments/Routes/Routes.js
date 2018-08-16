import InfoForm from '../InfoForm/InfoForm'
import Bracket from '../Bracket/TheBracket'

const Routes = [
    {  
        path:'/',
        component:InfoForm,
        exact:true
    },
    {
        path:'/Bracket',
        component: Bracket,
        exact:true
    }
]

export default Routes