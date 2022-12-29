import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Button,
    ButtonGroup,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from "reactstrap";

import Subcategories from "views/Subcategories.js"

const Categories_Boxes = ({category, num, subcat1, subcat2, subcat3, subcat4, subcat5, subcat6, subcat7, subcat8}) => {
    if(num=="0")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <Button style={{ color: "lightgray" }} href="/Subcategories">
              <small>View Vendors</small>
            </Button>
          </CardBody>
        </Card>
      )
    }
    if(num=="1")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href="/Subcategories">{subcat1}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="2")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="3")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="4")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat4}`}>{subcat4}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="5")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat4}`}>{subcat4}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat5}`}>{subcat5}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="6")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat4}`}>{subcat4}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat5}`}>{subcat5}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat6}`}>{subcat6}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="7")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat4}`}>{subcat4}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat5}`}>{subcat5}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat6}`}>{subcat6}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat7}`}>{subcat7}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
    if(num=="8")
    {
      return (
        <Card>
          <CardImg top src="https://picsum.photos/843/180" alt="..."/>
          <CardBody>
            <CardTitle>{category}</CardTitle>
            <br />
            <UncontrolledDropdown>
              <DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="secondary" data-toggle="dropdown" href="#pablo" id="dropdownMenuLink" onClick={e => e.preventDefault()} role="button">See all Subcategories</DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuLink">
                <DropdownItem>
                  <a href={`/Subcategories/${subcat1}`}>{subcat1}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat2}`}>{subcat2}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat3}`}>{subcat3}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat4}`}>{subcat4}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat5}`}>{subcat5}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat6}`}>{subcat6}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat7}`}>{subcat7}</a>
                </DropdownItem>
                <DropdownItem>
                  <a href={`/Subcategories/${subcat8}`}>{subcat8}</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
        </Card>
      )
    }
  };

export default Categories_Boxes;

