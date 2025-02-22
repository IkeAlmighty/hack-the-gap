import { useParams } from 'react-router';
import { getCollection } from '../data/dummy-data';

export default function TagInfo() {
    let { studentTag } = useParams();

    // const data = getCollection('strategyTools').filter(o => o.studentTag === studentTag)
    console.log(getCollection("strategyTools"));
    console.log(getCollection("strategyTools").filter(tool => tool.studentTag === studentTag))

    return (
        <div>

        </div>
    )
}