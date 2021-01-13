import { useDispatch } from 'react-redux';
import addCandidateAction from '../actions/addCandidate.js';

const AddCandidate = (props) => {
    const dispatch = useDispatch();
    dispatch(addCandidateAction());
};

export default AddCandidate;