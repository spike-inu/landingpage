import { ButtonBase, Text, Dialog, DialogTitle, DialogContent, Stack, Button, DialogActions, Box } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
const View: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { isMobile } = useDetect();
  return (
    <>
      <ButtonBase sx={{ p: 4 }} onClick={handleOpen}>
        <Text variant={isMobile ? 'h5' : 'body2'}>Disclaimer</Text>
      </ButtonBase>

      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <DialogTitle color="primary" sx={{ fontWeight: 'bold' }}>
            Disclaimer
          </DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={4}>
              <Text>
                iCrosschain disclaims all kinds of responsibilities, whether the fault of users or the fault of
                iCrosschain. You use our products and must be responsible for your assets at your own risk, and by
                accepting the Terms of Use of iCrosschain, you understand that you will be solely responsible for and
                take risks of any losses and damages. We shall not guarantee the transparency of any websites or
                projects you use through the execution of cross-chain transactions. This prefatory paper is for general
                information based on iCrosschain development proposal and experience. It should not be considered
                professional financial investment advice and used in the evaluation of making any investment decision.
                This paper reflects the current opinions of the authors and is not made on behalf of Paradigm or its
                affiliates. New updates and changes will not be announced. Please follow the official website for the
                latest product updates.
              </Text>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default React.memo(View);
