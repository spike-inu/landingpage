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
        <Text variant={isMobile ? 'h5' : 'body2'}>Terms And Conditions</Text>
      </ButtonBase>

      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <DialogTitle color="primary" sx={{ fontWeight: 'bold' }}>
            Terms And Conditions
          </DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={4}>
              <Text fontWeight="bold" color="primary">
                1. Welcome
              </Text>
              <Text>
                Welcome to iCrosschain and icrosschain.io. First and foremost, thank you for your attention to our
                product. These Terms of Use are a legal contract between you and iCrosschain regarding your use of the
                Site. Kindly read the following terms carefully before continuing any action. You will be assumed to
                have enough knowledge about understanding, and agreeing to our terms and conditions when using our
                product. Should you not comply with our terms, you are not eligible to use any part of our product.
              </Text>
              <Text fontWeight="bold" color="primary">
                2. Eligibility
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text fontWeight="bold" color="primary">
                    2.1 Age
                  </Text>
                  <Text>
                    You must be at least 18 years old and responsible for your decisions to use this Site. By using our
                    products, you warranty to us that you are at least 18 years old, and your use is in compliance with
                    any applicable laws and regulations.
                  </Text>
                  <Text fontWeight="bold" color="primary">
                    2.2 Accept laws and regulations
                  </Text>
                  <Text>
                    Cryptocurrency is a rising financial product in the current investment portfolio and thus has not
                    had clear rules or regulations in some regions. By agreeing to use this Site, you must comply with
                    any applicable laws and regulations issued by your government.{' '}
                  </Text>
                  <Text fontWeight="bold" color="primary">
                    2.3 Understand the risks (market risk, liquidity risk, legal risk)
                  </Text>
                  <Text>
                    - Market risk: Cryptocurrency is a new market with unpredicted fluctuation and volatility.
                    Therefore, coins/tokens may lose value without notice.
                  </Text>
                  <Text>
                    - Liquidity risk: iCrosschain provides crosschain swaps for multiple chains for users to access many
                    Daaps and projects. We do not take any responsibility for the credibility of these projects. The
                    risk with Rug Pull, in some cases, can be avoided, so caution and careful research are recommended
                    before investing in any products.
                  </Text>
                  <Text>
                    - Legal risk: There have not clear laws relating to using DEXs (Decentralized Exchanges) yet. You
                    may be banned from using our products due to your governmental laws and regulations without notice.
                  </Text>
                  <Text>
                    When using iCrosschain, you need to know that risks will include but not limited to impermanent
                    losses and potential smart-contract bugs. Before using our product, you shall acknowledge to read
                    and understand possible risks. Under no circumstance will we take any responsibility for your
                    losses.
                  </Text>
                </Stack>
              </Box>
              <Text fontWeight="bold" color="primary">
                3. Changes to the terms and site
              </Text>
              <Text>
                We may periodically make changes to these Terms without notice. We reserve the right to modify or
                discontinue, temporarily or permanently, all or a part of the Site without notice. All changes to the
                terms and conditions of the website will be effective immediately after any action is done. We will not
                be liable to you or to any third party for any modification, suspension, or discontinuance of the Site.
              </Text>
              <Text fontWeight="bold" color="primary">
                4. Restrictions
              </Text>
              <Text>
                You must ensure that your purchases are legal in your country and are subject to our terms. You are not
                allowed to use tools such as bots to trade on our platform or use, copy, and modify the content
                (including trademarks, copyrights, logos,…) of iCrosschain for any purpose without our permission.
              </Text>
              <Text fontWeight="bold" color="primary">
                5. LIMITATION OF LIABILITY
              </Text>
              <Text>
                iCrosschain will not be liable for any usage of the product. We expressly disclaim all warranties of any
                kind. We do not guarantee the accuracy, completeness or usefulness of our site. Losses and risks coming
                from users, service providers and us must be acknowledged and accepted by your own risk. By continuing
                using our product, you shall be acknowledged to agree and accept our terms and conditions mentioned
                above.
              </Text>
              <Text fontWeight="bold" color="primary">
                6. Privacy policy
              </Text>
              <Text>
                You can use our services to perform crosschain swaps, when you use our services, we want you to be aware
                of how we are using your information and how you can protect your privacy. For more information about
                privacy policy, check in here before using.
              </Text>
              <Text>
                Furthermore, in order to use iCrosschain. You have to create your own wallet (metamask, trustwallet,
                safepal, wallet connect supported). Please keep wallet’s password, private key safe. You’re solely
                responsible for any loss to your wallet. iCrosschain doesn’t keep the key and we will never ask for your
                private key phrase, even in a customer support scenario. If some does ask for it, they are scamers.
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
