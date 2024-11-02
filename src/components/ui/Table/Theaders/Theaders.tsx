

type THeaders = {
    headers: string[],
}

function Theaders({headers}:THeaders) {

  return (
    <thead>
        <tr>
            {headers.map(headName => <th>{headName}</th>)}
        </tr>
    </thead>
  )
}

export default Theaders