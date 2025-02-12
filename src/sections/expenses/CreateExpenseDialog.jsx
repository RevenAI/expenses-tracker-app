import { Button, Card, Separator, Flex, Input, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFormField,
  setLoading,
  setSuccess,
  setError,
} from "../../state/slices/createExpenseSlice";
import useFetch from "../../hooks/useFetch";
import { getEnvUrl } from "../../utils/helpers";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../components/ui/select";
import { categoryOptions, currencyOptions, paymentOptions } from "../../utils/expenseArray";

const CreateExpenseDialog = () => {
  const apiUrl = getEnvUrl();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createExpenses?.formData || {});
  const { loading, error, refetch } = useFetch(`${apiUrl}expenses`, "POST", formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateFormField({ name, value: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading()); 
    try {
      await refetch(); 
      dispatch(setSuccess()); 
    } catch (err) {
      dispatch(setError(err.message)); 
    }
  };

  return (
    <DialogRoot 
    onInteractOutside={(e) => e.preventDefault()} 
    scrollBehavior="inside" 
    size="md"
    placement="center" 
    motionPreset="slide-in-bottom"
    >
      <DialogTrigger asChild>
        <Button variant="outline">Create Expense</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogBody>
          <Card.Root p={4} bg="white" borderRadius="xl" boxShadow="lg">
            <Card.Header>
              <DialogHeader>
                <Separator my={2} mx={5} />
                <DialogTitle>Create Expense</DialogTitle>
              </DialogHeader>
              <DialogCloseTrigger />
            </Card.Header>
            <Separator my={2} />
            <Card.Body>
              {/* Form Starts Here */}
              <Flex as="form" direction="column" w="100%" onSubmit={handleSubmit}>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />
                <Input
                  name="description"
                  placeholder="Description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />
                <Input
                  name="merchant"
                  placeholder="Merchant"
                  value={formData.merchant || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />
                <Input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  value={formData.amount || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />
                <Input
                  name="date"
                  type="date"
                  value={formData.date || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />

                {/* Currency Select */}
                <SelectRoot
                  collection={currencyOptions}
                  size="lg"
                  width="100%"
                  name="currency"
                  value={formData.currency || "NGN"}
                  onValueChange={(value) => handleChange({ target: { name: "currency", value } })}
                  mb={4}
                >
                  <SelectLabel>Select Currency</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.items.map((currency) => (
                      <SelectItem key={currency.value} item={currency}>
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>

                {/* Category Select */}
                <SelectRoot
                  collection={categoryOptions}
                  size="lg"
                  width="100%"
                  name="category"
                  value={formData.category || ""}
                  onValueChange={(value) => handleChange({ target: { name: "category", value } })}
                  mb={4}
                >
                  <SelectLabel>Select Category</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.items.map((category) => (
                      <SelectItem key={category.value} item={category}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>

                {/* Payment Method Select */}
                <SelectRoot
                  collection={paymentOptions}
                  size="lg"
                  width="100%"
                  name="payment_method"
                  value={formData.payment_method || "Credit Card"}
                  onValueChange={(value) => handleChange({ target: { name: "payment_method", value } })}
                  mb={4}
                >
                  <SelectLabel>Select Payment Method</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentOptions.items.map((method) => (
                      <SelectItem key={method.value} item={method}>
                        {method.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>

                {/* Additional Info Textarea */}
                <Textarea
                  name="additional_info"
                  placeholder="Describe your expense"
                  value={formData.additional_info || ""}
                  onChange={handleChange}
                  mb={4}
                  size="lg"
                  focusBorderColor="blue.500"
                />

                {/* Error Message */}
                {error && (
                  <Flex color="red.500" fontSize="sm" mb={4}>
                    {error}
                  </Flex>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  isLoading={loading}
                  loadingText="Submitting..."
                  disabled={loading}
                >
                  Submit
                </Button>
              </Flex>
              {/* Form Ends Here */}
            </Card.Body>
          </Card.Root>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default CreateExpenseDialog;

