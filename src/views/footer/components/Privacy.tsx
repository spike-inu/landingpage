import { ButtonBase, Text, Dialog, DialogTitle, DialogContent, Stack, Button, DialogActions, Box } from 'components';
import React from 'react';
const View: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonBase onClick={handleOpen}>
        <Text variant="body2">Privacy And GDPR Policy</Text>
      </ButtonBase>

      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <DialogTitle color="primary" sx={{ fontWeight: 'bold' }}>
            Privacy And GDPR Policy
          </DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={4}>
              <Text>
                This document states what information iCrosschain will collect from users, why, and how we keep it
                private. In short, before using our products, you should read carefully how your data is handled.
                Information we collect includes users’ wallet addresses, e-mails or social media contacts (optional),
                and cookies (if you allow).
              </Text>
              <Text fontWeight="bold" color="primary">
                The purposes of collecting users’ information are:
              </Text>
              <Text>
                1. To offer users bonuses, retroactive via using our products, airdrop, and trading campaigns.
              </Text>
              <Text>
                2. To conduct customer service. The information you provide will help us to better our customer service.
                Unless you have any problem while using our products, we will not request your e-mail or social media
                contacts.
              </Text>
              <Text>
                3. To enhance our service with the information collected from cookies. This will assist us in the
                process of continuous improvement for better user experiences.
              </Text>
              <Text fontWeight="bold" color="primary">
                How we will protect your information:
              </Text>
              <Text>We use various protocols and algorithms to secure users’ information.</Text>
              <Text fontWeight="bold" color="primary">
                iCrosschain never buys, sells, exchanges, and provides users’ information to any 3rd parties:
              </Text>
              <Text>
                With the principle of 100% decentralization, iCrosschain will be the bridge to help users conduct
                transactions and completely protect users' personal information. Under no circumstances do we accept to
                provide users’ information to third parties. No organization can ask us for users’ data.
              </Text>
              <Text>
                <Text color="red">Note: </Text>iCrosschain is a Dex, which provides tools to trade and swap tokens in
                the same blockchain or between multiple blockchains. We may include or offer 3rd-party products or
                services to you. They have separate and independent privacy policies from iCrosschain. Therefore, we are
                not responsible for the contents of those products.
              </Text>
              <Text fontWeight="bold" color="primary">
                Changes to the Privacy and GDPR policy
              </Text>
              <Text>
                We may make changes to these Privacy and GDPR policies without prior notice. All of these policies will
                take effect as soon as they are changed, so you need to monitor them carefully before using them to
                ensure your rights.
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
