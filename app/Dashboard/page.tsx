import { Card } from 'primereact/card';
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Card title={<div><i className="pi pi-box"/> Store</div> } subTitle="View and manage your products" style={{marginBottom: '2em'}}>
        <a href="/Store">Store</a>
      </Card>
      <Card title={<div><i className="pi pi-sign-in"/> Inputs</div> } subTitle="View and manage your inputs" style={{marginBottom: '2em'}}>
        <a href="/Inputs">Inputs</a>
      </Card>
      <Card title={<div><i className="pi pi-sign-out"/> Outputs</div>} subTitle="View and manage your outputs">
        <a href="/Outputs">Outputs</a>
      </Card>
    </div>
  );
}

export default DashboardPage; 
