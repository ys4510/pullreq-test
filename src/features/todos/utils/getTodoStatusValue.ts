import {type TodoStatus} from '../../todos/types'

const getTodoStatusValue = (key: TodoStatus) => {

  switch (key) {
    case 'waiting': return "未着手";
    case 'working': return "着手中";
    case 'pending': return "待機中";
    case 'discontinued': return "中止";
    case 'completed': return "完了";
    default: return key;
  }
}

export default getTodoStatusValue