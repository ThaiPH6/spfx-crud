import * as React from "react";
import styles from "./SharepointCrud.module.scss";
import { IReactSpfxWebPartProps } from "./ISharepointCrudProps";
// import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from "jquery";

export interface IReactSpfxState {
  id: string;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export interface Item {
  id: string;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export default class SharepointCrud extends React.Component<
  IReactSpfxWebPartProps,
  IReactSpfxState
> {
  public constructor(props: IReactSpfxWebPartProps, state: IReactSpfxState) {
    super(props);

    this.state = {

      id: null,
      name: null,
      username: null,
      email: null,
      address: null,
      phone: null,
      website: null,
      company: null

    };
  }

  public componentDidMount() {
    // setInterval(
    //   () => this.fetchDatafromSharePointList(),
    //   1000
    // );
    this.fetchDatafromSharePointList();
  }

  private fetchDatafromSharePointList() {
    var reactHandler = this;
    jquery.ajax({
      url: `https://jsonplaceholder.typicode.com/users/2`,
      type: "GET",
      headers: { Accept: "application/json; odata=verbose;" },
      success: function (response) {
        /*resultData.d.results;*/
        reactHandler.setState({
          id: response.id,
          name: response.name,
          username: response.username,
          email: response.email,
          address: 'Street: ' + response.address.street + ' Suite: ' + response.address.suite + ' City' + response.address.city + ' Zip Code:' + response.address.zipcode,
          phone: response.phone,
          website: response.website,
          company: response.company.name,
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // reactHandler.setState({
        //   items: [
        //     {
        //       courses: "aaaa",
        //       credit: "bbbbb",
        //       department: "aaaaadas",
        //     },
        //     {
        //       courses: "aaaa1",
        //       credit: "bbbbb1",
        //       department: "aaaaadas1",
        //     },
        //     {
        //       courses: "aaaa2",
        //       credit: "bbbbb2",
        //       department: "aaaaadas2",
        //     },
        //     {
        //       courses: "aaaa3",
        //       credit: "bbbbb3",
        //       department: "aaaaadas3",
        //     },
        //   ],
        // });
      },
    });
  }

  public render(): React.ReactElement<IReactSpfxWebPartProps> {
    return (
      <section>
        <div className={styles.welcome}>User Details:</div>
        <div>
          <strong>ID: </strong>
          {this.state.id}
        </div>
        <br />
        <div>
          <strong>User Name: </strong>
          {this.state.username}
        </div>
        <br />
        <div>
          <strong>Name: </strong>
          {this.state.name}
        </div>
        <br />
        <div>
          <strong>Address: </strong>
          {this.state.address}
        </div>
        <br />
        <div>
          <strong>Email: </strong>
          {this.state.email}
        </div>
        <br />
        <div>
          <strong>Phone: </strong>
          {this.state.phone}
        </div>
        <br />
        <div>
          <strong>Web site: </strong>
          {this.state.website}
        </div>
        <br />
        <div>
          <strong>Company: </strong>
          {this.state.company}
        </div>
        <br />
      </section>
    );
  }

  // public render(): React.ReactElement<ISharepointCrudProps> {
  //   const {
  //     description,
  //     isDarkTheme,
  //     environmentMessage,
  //     hasTeamsContext,
  //     userDisplayName
  //   } = this.props;

  //   return (
  //     <section className={`${styles.sharepointCrud} ${hasTeamsContext ? styles.teams : ''}`}>
  //       <div className={styles.welcome}>
  //         <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
  //         <h2>Well done, {escape(userDisplayName)}!</h2>
  //         <div>{environmentMessage}</div>
  //         <div>Web part property value: <strong>{escape(description)}</strong></div>
  //       </div>
  //       <div>
  //         <h3>Welcome to SharePoint Framework!</h3>
  //         <p>
  //           The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
  //         </p>
  //         <h4>Learn more about SPFx development:</h4>
  //         <ul className={styles.links}>
  //           <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
  //           <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
  //           <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
  //           <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
  //           <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
  //           <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
  //           <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // }
}
