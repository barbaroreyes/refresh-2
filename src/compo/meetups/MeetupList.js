import { DUMMY_DATA} from "../../data"
import MeetupItem from './MeetupItem'

const MeetupList = () => {
  return (
    <div>
      {DUMMY_DATA.map((item ,i)=>{
        return (
            <MeetupItem  key={i}{...item}/>
        )

      })}
    </div>
  );
}

export default MeetupList;
