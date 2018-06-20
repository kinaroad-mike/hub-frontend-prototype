import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Card, Grid, Loader, Statistic, Table } from 'semantic-ui-react';

import { accountActions } from '../../state/ducks/accounts';
import { format } from '../utils';

// export const Dashboard = () => (
//   <div>Dashboard</div>
// );

class Dashboard extends Component {
  componentWillMount () {
    this.props.fetchAccounts();
  }
  accountList () {
    return _.map(this.props.accounts.items, account => (
      <Table.Row key={account.id}>
        <Table.Cell>
          {account.name}
        </Table.Cell>
        <Table.Cell>
          {format.toStringMoney(account.current_balance)}
        </Table.Cell>
      </Table.Row>
    ));
  }

  netWorth () {
    const { accounts } = this.props;

    const netWorth = _.sum(_.map(accounts.items, o => o.current_balance));
    return format.toStringMoney(netWorth);
  }

  render () {
    const { accounts } = this.props;
    return (
      <Grid.Row centered>
        <Grid.Column width={8}>
          <Card fluid raised>
            <Card.Content>
              <Card.Header>Accounts</Card.Header>
              <Card.Description>
                { !accounts.items && <Loader active /> }
                <Table>
                  <Table.Body>
                    { accounts.items && this.accountList() }
                  </Table.Body>
                </Table>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={6}>
          <Card fluid raised>
            <Card.Content>
              <Card.Header>Stats</Card.Header>
              <Card.Description>
                <Statistic>
                  <Statistic.Value text>
                    {
                      accounts.items
                        ? this.netWorth()
                        : <Loader active />
                    }
                  </Statistic.Value>
                  <Statistic.Label>Net Worth</Statistic.Label>
                </Statistic>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

Dashboard.propTypes = {
  fetchAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.shape({
    items: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  })
};

Dashboard.defaultProps = {
  accounts: undefined
};

function mapDispatchToProps (dispatch) {
  return {
    fetchAccounts: () => dispatch(accountActions.fetchAccounts())
  };
}

function mapStateToProps (state) {
  return {
    accounts: state.accounts
  };
}

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export { connectedDashboard as Dashboard };
