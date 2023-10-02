import React, { PureComponent } from 'react';
import { Button, Dialog, DialogTitle } from '@material-ui/core';

class ShareProduct extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
  }

  handleOpenDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  handleCloseDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { productURL } = this.props;
    const { isDialogOpen } = this.state;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleOpenDialog}
        >
          Share Product
        </Button>
        <Dialog open={isDialogOpen} onClose={this.handleCloseDialog}>
          <DialogTitle>Share this Product</DialogTitle>
          {/*  <h1>{productURL}</h1> */}
        </Dialog>
      </div>
    );
  }
}

export default ShareProduct;
