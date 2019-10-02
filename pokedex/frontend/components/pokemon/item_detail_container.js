import { connect } from 'react-redux';
import itemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
    const itemID = parseInt(ownProps.match.params.itemId);
    let item = state.entities.items[itemID];
    return {
        item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    //eventually be able to update items
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(itemDetail);