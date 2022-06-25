//generate transfer pdf
module.exports = ({ fullname, transfer_reason, transfer_to, loc_new_school, new_course, comment_to_nu, permission_info, type_of_comm, date }) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Interview Request for Exit to Transfer- ${fullname}</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><h1>National University Guidance Services</td>
                            <td>
                               Date: ${today.getDate()} ${today.getMonth() + 1} ${today.getFullYear()}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Student name: ${fullname}
                            </td>
                            <td>
                               Type of Interview: Exit to Transfer
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Details:</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td>Reason of Transferring:</td>
                   <td>${transfer_reason}</td>
                </tr>
                <tr class="item">
                   <td>To what school will you transfer?:</td>
                   <td>${transfer_to}</td>
                </tr>
                <tr class="item">
                   <td>Location of your preferred school:</td>
                   <td>${loc_new_school}</td>
                </tr>
                <tr class="item">
                   <td>Course/program you're planning to take:</td>
                   <td>${new_course}</td>
                </tr>
                <tr class="item">
                   <td>Other comments and suggestion for NU's further improvement:</td>
                   <td>${comment_to_nu}</td>
                </tr>
                <tr class="item">
                   <td>Will you allow us to include your information to the list we will
                   give to the requesting companies/agencies for employment purposes:</td>
                   <td>${permission_info}</td>
                </tr>
                <tr class="item">
                   <td>Type of Communication:</td>
                   <td>${comment_to_nu}</td>
                </tr>
                <tr class="item">
                   <td>Course/program you're planning to take:</td>
                   <td>${type_of_comm}</td>
                </tr>
                <tr class="item">
                   <td>Date and Time of Interview:</td>
                   <td>${date}</td>
                </tr>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};