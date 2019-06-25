<template>
  <div>
    <h2>Tables</h2>
    <div id="table-container">
      <table>
        <tr>
          <th colspan="2">Group A</th>
        </tr>
        <tr>
          <td>Mexico</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Canada</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Martinique</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Cuba</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">Group B</th>
        </tr>
        <tr>
          <td>Costa Rica</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Haiti</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Nicaragua</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Bermuda</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">Group C</th>
        </tr>
        <tr>
          <td>Honduras</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Jamaica</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>El Salvador</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Curacao</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">Group D</th>
        </tr>
        <tr>
          <td>USA</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Panama</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Trinidad &#38; Tobago</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
        <tr>
          <td>Guyana</td>
          <td class="points"><input maxlength="1" placeholder="0"/></td>
        </tr>
      </table>
    </div>
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
  
  h2 {
    color: white;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 50px;
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
    padding-left: 5px;
  }

  #table-container td {
    border-top: 1px solid rgba(0, 0, 0, .2);
    padding-left: 5px;
  }

  #table-container .points {
     width: 50px;
     padding-left: 0px;
  }

  #table-container .points input {
    width: 50px;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 18px;
    text-align: center;
  }
</style>
