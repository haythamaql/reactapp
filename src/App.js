import {Col,DatePicker, Row,Layout,Card,Radio,Form,Divider,Modal,Space,Input,Checkbox,Select,Button  } from 'antd';
import React,{ useState }  from 'react';
import {ExclamationOutlined,FolderOpenOutlined,EditOutlined,DeleteOutlined,CheckCircleOutlined,CloseCircleOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha'; 
const { Header, Footer, Content } = Layout;



function App () {
  const [value, setValue] = useState(1);
  const [rightToCorrect, setRightToCorrect] = useState(0);
  const [ssnInput, setSSNinput] = useState(false);
  const [eaInput, setEAInput] = useState(false);
  const [dlInput, setDLInput] = useState(false);

  
const { Option } = Select;


const onChange = (value: string) => {
  setServiceList([...serviceList, { service: value }]);
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};


const [serviceList, setServiceList] = useState([{ service: "" }]);

const handleServiceChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...serviceList];
  list[index][name] = value;
  setServiceList(list);
};

const handleServiceRemove = (index) => {
  const list = [...serviceList];
  list.splice(index, 1);
  setServiceList(list);
};





const [checkedCA, setCheckedCA] = useState(false);

const handleChange = (e) => {

  console.log("e.target.value",e.target.value)
  setCheckedCA(e.target.value);
}

const [checkedSubmit, setCheckedSubmit] = useState(false);


const onChangeDC = (e) => {
  console.log("e.target.value",e.target.value)
  setCheckedSubmit(e.target.value);
}

const onChangeRightTo = (e) => {
  setRightToCorrect(e.target.value);
}




const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};


const handleChangeMultiSelectFields = (value: string[]) => {
  console.log(typeof value);

  if(str_contains(value,'ssn')){
    setSSNinput(true);
  }

  else if(value.includes('EmailAddress')){
    setEAInput(true);
  }


  else if(value.includes('DriversLicense')){
    setDLInput(true);
  }


  else{
    setSSNinput(false);
    setEAInput(false);
    setDLInput(false);

  }



  console.log(`selected ${value}`);
};



  return(
  
    <Row>

<Modal title="You about to delete your information ..." visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<b>
Are you sure you want to delete Your information?

</b>

      </Modal>

      <Col span={24}>
      <Layout>
      <Header className='header'>
        <div className='privacy-request'>
        <img className="logo" src="https://toyotafinancial-h.assetsadobe.com/is/image/content/dam/tmcc-webcommons/toyotafinancial/global/header/icons/TFS_logo_horiz_rgb_new.png" />
        </div>

      </Header>
      <Content>
      <Row>
      <Col>
        <Card bordered={true}>
          <h2 className="card-title">Data Privacy Request</h2>
          
<div className='cards-boxes'>

<div className='agent'>
<p>
<b> I am</b> an <span style={{ textDecoration: "underline"}}> authorized agent  </span> submitting a
request on behalf of a user who is a
current or former Toyota Motor Insurance
Services vehicle protection product
customer

</p>
<br />
<Button className='call_us_button'>1-866-xxx-xxxx</Button>

  </div>

  
  <div className='customer'>
  <p>
 <b> I am</b> a Toyota Motor Insurance Services 
<span style={{ textDecoration: "underline"}}> user </span> who wants to file a data privacy
request
  </p>
  <Button style={{background:"black",color:"white"}} size="large" >Get Started</Button>
  <br />
  <span>or call</span><br />
  <Button className='call_us_button'>1-866-xxx-xxxx</Button>

  </div>


</div>
        </Card>
        
      </Col>
      </Row>




      </Content>

<div className='Spacer'></div>
      <Content>
      <Row>
      <Col>
        <Card bordered={true}>
<h4><b>Personal Information:</b></h4>

<Row className='form'>
      <Col span={8}>
      <label>First Name <span className="required">*</span></label>
        <br />
      <Input size="large"  />
      </Col>
      <Col span={8}>
        <label>Last Name</label>
        <br />
        <Input size="large"  />
      </Col>
    </Row>

    <div className='Spacer'></div>

    <Row className='form'>
      <Col span={8}>
        <label>Date of Birth <span className="required">*</span></label>
        <br />
      <DatePicker style={{width: "219px"}} size="large"></DatePicker>
      </Col>
      <Col span={8}>
        <label>Phone number <span className="required">*</span></label>
        <br />
        <Input size="large"  />
      </Col>

      <Col span={8}>
        <label>Email <span className="required">*</span></label>
        <br />
        <Input size="large"  />
      </Col>
    </Row>

    <br /><br />
    <h4><b>Account Information:</b></h4>

    <Row className='form'>
      <Col span={8}>
        <label>Last 6 of SSN <span className="required">*</span></label>
        <br />
        <Input size="large"  />
      </Col>
      <Col span={8}>
        <label className="required">Account number</label>
        <br />
        <Input prefix={<ExclamationOutlined />}  status="error" size="large"  />
      </Col>

      

    </Row>


<Row>
<div className='find_account_number'>
<div>
<h4><b>Where to find Account number?</b></h4>
<p>
Aenean auctor finibus leo, et luctus justo hendrerit sit amet. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean auctor finibus leo, et luctus justo hendrerit sit amet.
</p>
</div>
  </div>

</Row>





<br /><br /><br /><br />
    <h4><b>How would you like to receive your information?
</b></h4>

    <Row className='form'>

    <Col span={9}>
    <div className='recive_box'>
<label for="byemail">By Email</label>
    <input type="radio" id="byemail" name="recive_information" value="byemail" />
</div>
      </Col>
      <Col span={9}>
      <div className='recive_box'>
<label for="byemail">By mailing address</label>
    <input type="radio" id="byemail" name="recive_information" value="byemail" />
</div>
      </Col>



    </Row>

<br />


    <Row className='form'>

    <Col span={6}>
    <label>Email address  <span className="required">*</span></label>
        <br />
        <Input size="large"  />
</Col>


    </Row>


<br /><br />
    <h4><b>I want to:
</b></h4>


<Row className='iwanto' gutter={16}>
      <Col span={8}>
        <Card bordered={true}>
        <FolderOpenOutlined style={{ fontSize: '30px'}} />
        <br />
        <br />
        View all my personal
information.
        </Card>
      </Col>
      <Col span={8}>
        <Card className='iwantoactive' bordered={true}>
        <EditOutlined style={{ fontSize: '30px'}} />
        <br />

        Edit my personal
information. 
<br />

<CheckCircleOutlined />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={true}>
        <DeleteOutlined style={{ fontSize: '30px'}} />
        <br />

        Delete my personal
information
<br />
<br />
        </Card>
      </Col>
    </Row>



    <Row>
    <Col span={18}>
<div className='editing_personal_information_box'>
<h4><b>Editing personal information:
</b></h4>
<p>
You will have to fill out a form to request changes in your personal information.Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Aenean auctor finibus leo, et luctus justo hendrerit sit amet.
<ul>
<li>Quisque interdum augue augue, nec molestie enim feugiat quis.</li>
<li>Donec porta vitae mauris non elementum.
</li>
</ul>
</p>
  </div>

        </Col>
    </Row>

    <br />
    <br />


      <Row gutter={16}>
      <Col className="gutter-row" span={9}>
    <h4><b>Select the data you want to correct:
</b></h4>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder={"Search ..."+ExclamationOutlined}
    onChange={handleChangeMultiSelectFields}
    optionLabelProp="label"
  >
    <Option value="ssn" label="SSN">
      <div className="demo-option-label-item">
        SSN
      </div>
    </Option>
    <Option value="EmailAddress" label="Email Address">
      <div className="demo-option-label-item">
        Email Address
      </div>
    </Option>
    <Option value="DriversLicense" label="Drivers License">
      <div className="demo-option-label-item">
        Drivers License
      </div>
    </Option>
  </Select>


        </Col>


    </Row>

{ssnInput &&
<div>
<div className='spacer_top'></div>
<Row className='inputSelectionGroup' gutter={16}>
    <Col className="gutter-row" span={9}>
  Corrected Social Security Number *
        <Input placeholder="Basic usage" />
  </Col>
  <Col className="gutter-row" span={9}>
  <CloseCircleOutlined className='x_icon' />
  </Col>
</Row>

<br />
</div>
}
{eaInput &&
<div>
<Row className='inputSelectionGroup' gutter={16}>
    <Col className="gutter-row" span={9}>
    Corrected Email address  *
        <Input placeholder="Basic usage" />
  </Col>
  <div className='spacer_top'></div>
  <Col className="gutter-row" span={9}>
  <CloseCircleOutlined className='x_icon' />
  </Col>
</Row>
<br />
</div>
}

{dlInput && 
<div>
<Row className='inputSelectionGroup' gutter={16}>
    <Col className="gutter-row" span={9}>
    Corrected Drivers License *
        <Input placeholder="Basic usage" />
  </Col>
  <div className='spacer_top'></div>
  <Col className="gutter-row" span={9}>
  <CloseCircleOutlined className='x_icon' />
  </Col>
</Row>
</div>
}




        </Card>
        
      </Col>
      </Row>


      </Content>





    </Layout>

      </Col>
    </Row>



)};

export default App;