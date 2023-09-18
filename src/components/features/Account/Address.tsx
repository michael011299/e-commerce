import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import AddressModal from "./AddressModalAccount";
import { deleteAddress } from "../../../services/addressService";
import { EditAddressModal } from "./EditAddressModal";

export const Address = ({ addressData }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div style={{ color: "white" }}>
        <h4>Update Delivery Addresses: </h4>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          {addressData.map((address: any) => {
            return (
              <>
                <Card
                  style={{
                    padding: "1%",
                    margin: "1%",
                    display: "grid",
                    gridTemplateColumns: "50% 25% 25%",
                  }}
                >
                  {address.house_num}, {address.street_name}, {address.town},{" "}
                  {address.postcode}
                  <Button
                    variant="secondary"
                    style={{ margin: "1%" }}
                    onClick={() => setShow(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    style={{ margin: "1%" }}
                    onClick={() => {
                      deleteAddress(address.address_id);
                      window.location.href = "http://localhost:3000/account";
                    }}
                  >
                    Remove
                  </Button>
                </Card>
                <EditAddressModal
                  show={show}
                  setShow={setShow}
                  address={address}
                />
              </>
            );
          })}
        </div>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Address
        </Button>
        {showModal ? (
          <AddressModal showModal={showModal} setShowModal={setShowModal} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
