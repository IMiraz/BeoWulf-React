import React from 'react';
import proTypes from 'prop-types'

const InlineError = ({text}) =>
<span style={{ color :"#ae5856"}}>
{text}
</span>

InlineError.propTypes = {
 text:proTypes.string.isRequired
}

export default InlineError;
