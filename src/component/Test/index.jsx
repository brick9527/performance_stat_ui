import { useEffect } from 'react';
import { connect } from 'react-redux';


function Test(props) {
  useEffect(() => {
    console.log(props.batchId);
  }, [props.batchId])
  return (
    <div>
      batchId: {props.batchId}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Test);

