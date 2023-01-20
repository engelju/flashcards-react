import React from 'react'

import QuestionnaireShowDialog from './QuestionnaireShowDialog'

const QuestionnaireTableElement = ({ questionnaire }) => (
    <tr key={ questionnaire.id } >
        <td>{ questionnaire.id }</td>
        <td>{ questionnaire.title }</td>
        <td>{ questionnaire.description }</td>
        {/* pass the questionnaire as a property to the component */}
        <td><QuestionnaireShowDialog questionnaire={ questionnaire } /></td>
    </tr>
)

export default QuestionnaireTableElement