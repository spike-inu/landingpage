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
        <Text variant={isMobile ? 'h5' : 'body2'} color="text.disabled">
          Cookies Policy
        </Text>
      </ButtonBase>

      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <Box sx={{ bgcolor: 'background.default' }}>
          <DialogTitle color="primary" sx={{ fontWeight: 'bold' }}>
            Cookies Policy
          </DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={4}>
              <Text>
                Please read this Cookies Policy carefully before accessing, browsing, using a swap or the Website,
                and/or participating in any Services as defined within our Terms and Conditions. It is intended for the
                reader of this Cookies Policy to have an understanding of and accept the Company’s Terms and Conditions.
                Your access to and use of the Website is conditioned on your understanding of and compliance of this
                Cookies Policy.
              </Text>
              <Text fontWeight="bold" color="primary">
                1. Cookies
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>
                    1.1. The Company Website uses Cookies to better the Users experience while visiting the Website.
                  </Text>
                  <Text>
                    1.2. A Cookie is a message given to a web browser by a web server. The browser stores the message in
                    a text file. The main purpose of cookies is to identify users and possibly prepare customized Web
                    pages for them. Use of a Cookie by the Website is in no way linked to any personally identifiable
                    information while on our site and will not infringe on the privacy of our customers.
                  </Text>
                  <Text>
                    1.3. Cookies are files sent by web servers to web browsers and stored by the web browsers.
                  </Text>
                  <Text>
                    1.4. The information is then sent back to the server each time the browser requests a page from the
                    server. This enables a web server to identify and track web browsers.
                  </Text>
                  <Text>
                    1.5. There are two main kinds of Cookies: session Cookies and persistent Cookies. Session Cookies
                    are deleted from your computer when you close your browser, whereas persistent Cookies remain stored
                    on your computer until deleted, or until they reach their expiry date.
                  </Text>
                  <Text>1.6. Cookies used are both Session and Persistent Cookies regarding our services.</Text>
                </Stack>
              </Box>
              <Text fontWeight="bold" color="primary">
                2. Purpose
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>2.1. In order to provide a provide the Services, the Company utilises Cookies</Text>
                  <Box>
                    <Stack spacing={4} ml={4} direction="column">
                      <Text>2.1.1. To provide Analytics</Text>
                      <Text>2.1.2. To store your Preferences</Text>
                    </Stack>
                  </Box>
                  <Text>
                    2.2. We will ask the User when we need further information that requires personal identification to
                    allow us to connect to the User.
                  </Text>
                </Stack>
              </Box>

              <Text fontWeight="bold" color="primary">
                3. Google Cookies
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>
                    3.1. The Company uses Google Analytics to analyse the use of this website. Google Analytics
                    generates statistical and other information about website use by means of Cookies, which are stored
                    on users' computers. The information generated relating to our website is used to create reports
                    about the use of the website. Google will store and use this information. Google's privacy policy is
                    available at{' '}
                    <a target="_blank" href="http://www.google.com/privacypolicy.html" style={{ color: 'cyan' }}>
                      http://www.google.com/privacypolicy.html
                    </a>
                  </Text>

                  <Text>
                    3.2. However, this opt-out mechanism uses a cookie, and if you clear the Cookies from your browser
                    your opt-out will not be maintained. To ensure that an opt-out is maintained in respect of a
                    particular browser, you should use the Google browser plug-in available at{' '}
                    <a target="_blank" href="http://www.google.com/ads/preferences/plugin" style={{ color: 'cyan' }}>
                      http://www.google.com/ads/preferences/plugin
                    </a>
                  </Text>
                </Stack>
              </Box>
              <Text fontWeight="bold" color="primary">
                4. Third-Party Cookies
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>
                    4.1. We may also use various Third-Party Cookies to report usage statistics of the Services, deliver
                    advertisements, analytics etc.
                  </Text>
                  <Text>
                    4.2. When you use this website, you may also be sent the following third party Cookies. Google
                    Analytics: We use Google Analytics to help measure how users interact with the Company{' '}
                    <a target="_blank" href="https://policies.google.com/privacy" style={{ color: 'cyan' }}>
                      https://policies.google.com/privacy
                    </a>
                  </Text>
                </Stack>
              </Box>
              <Text fontWeight="bold" color="primary">
                5. Refusing Cookies
              </Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>
                    5.1. Most browsers allow you to refuse to accept Cookies. Please consult your Web Browser creator
                    for further information.
                  </Text>
                  <Text>5.2. Blocking Cookies will have a negative impact upon the usability of some websites.</Text>
                </Stack>
              </Box>
              <Text fontWeight="bold" color="primary">
                6. Your Choices
              </Text>
              <Text>
                6.1. If you would like to delete Cookies or instruct your web browser to delete or refuse Cookies,
                please visit their respective websites.
              </Text>
              <Text>
                6.2. If you remove or restrict Cookies from this website, the website may cease to function as intended.
              </Text>
              <Text>6.3. For further Consumer Information regarding Cookies, please visit;</Text>
              <Box>
                <Stack spacing={4} ml={4} direction="column">
                  <Text>
                    6.3.1. All About Cookies:{' '}
                    <a target="_blank" href="http://www.allaboutcookies.org" style={{ color: 'cyan' }}>
                      http://www.allaboutcookies.org
                    </a>
                  </Text>
                  <Text>
                    6.3.2. Network Advertising Initiative:{' '}
                    <a target="_blank" href="http://www.networkadvertising.org" style={{ color: 'cyan' }}>
                      http://www.networkadvertising.org
                    </a>
                  </Text>
                </Stack>
              </Box>
              <Text>
                6.4. If you require further clarification regarding any matter contained within this policy, please
                contact us.
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
