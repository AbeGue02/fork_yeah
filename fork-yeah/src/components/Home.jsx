export default function Home () {
    
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getCategories = async () => {
            let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            //console.log(response.data.categories)
            setCategories(response.data.categories)
        }

        getCategories()
    }, [])

    useEffect(() => {
        console.log(categories)
    }, [categories])
    
    return (
        <>
        
        </>
    )
}