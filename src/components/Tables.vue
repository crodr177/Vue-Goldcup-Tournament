<template>
  <div id="table-container">
    <table>
      <tr>
        <th colspan="2">Group A</th>
      </tr>
      <tr>
        <td>Mexico</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Canada</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Martinique</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Cuba</td>
        <td>0</td>
      </tr>
    </table>
     <table>
      <tr>
        <th colspan="2">Group B</th>
      </tr>
      <tr>
        <td>Costa Rica</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Haiti</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Nicaragua</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Bermuda</td>
        <td>0</td>
      </tr>
    </table>
     <table>
      <tr>
        <th colspan="2">Group C</th>
      </tr>
      <tr>
        <td>Honduras</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Jamaica</td>
        <td>0</td>
      </tr>
      <tr>
        <td>El Salvador</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Curacao</td>
        <td>0</td>
      </tr>
    </table>
     <table>
      <tr>
        <th colspan="2">Group D</th>
      </tr>
      <tr>
        <td>USA</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Panama</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Trinidad &#38; Tobago</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Guyana</td>
        <td>0</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #table-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #table-container table {
    border-radius: 3px;
    background-color: white;
    color: black;
    width: 485px;
    height: 250px;
    margin-top: 30px;
  }

  #table-container th {
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
  }

  #table-container td {
    border-top: 1px solid rgba(0, 0, 0, .2);
  }
</style>
